
async function requestLogin() {
    var email = document.getElementById('your-email').value;
    var password = document.getElementById('password').value;
    

    
                fetch('https://ptsibackend.herokuapp.com/login', {
                    method: 'POST',
                    
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(result => {
                    console.log(result)
                    if(result.status == 200) {
                  
                      
                        
                    
                       window.location.replace("semregisto.html")
                    }
                    else {
                        console.log("Erro!")
                    }
                    return result.json();
                })
            }
       
            async function requestRegister() {
                var name = document.getElementById('full-name').value;
                var email = document.getElementById('your-email').value;
                var password = document.getElementById('password').value;
                var conf_pwd = document.getElementById('confirm_pwd').value;
            
                
                            fetch('https://ptsibackend.herokuapp.com/register', {
                                method: 'POST',
                                
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                
                                body: JSON.stringify({
                                    name: name,
                                    email: email,
                                    password: password,
                                    conf_pwd: conf_pwd
                                })
                            }).then(result => {
                                console.log(result)
                                if(result.status == 200) {
                                    window.location.replace("semregisto.html") 
                                }
                                else {
                                    console.log("Erro!")
                                }
                                return result.json();
                            })
                        }

/*
                      
  // Autenticar administrador na área privada
  btnLogin.addEventListener("click", function() {
    swal.fire({
      title: "Login",
      html:
      '<input type="email"id="txtEmail" class="swal2-input" placeholder="e-mail" >' +
      '<input type="password" id="txtPass" class="swal2-input" placeholder="password" >',      
      showCancelButton: true,
      confirmButtonText: "Entrar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const email = document.getElementById('txtEmail').value
        const pass = document.getElementById('txtPass').value
        return fetch('https://ptsibackend.herokuapp.com/login', {
          headers: {
            'Content-Type': 'application/json'
          },          
          method: "POST",
          body: JSON.stringify({
            email: email,
            pass: pass
        })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            swal.showValidationError(`Pedido falhado: ${error}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then(result => {
      console.log(result.value)
      
      if (result.value.sucesss) {                       
          swal({title: "Autenticação feita com sucesso!"})
          window.location.replace("admin/participants.html")  
        } else {
          swal.fire({title: `${result.value.message.pt}`})  
        }
      
    });
  });
  

 /* btnLogin.addEventListener("click", function() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
       Read more about handling dismissals below 
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  });
  */
  

