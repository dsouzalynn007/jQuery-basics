// ! START JQUERY
// for(let i=0; i<94; i++){
//   let btn=document.createElement('button')
//   $(btn).addClass('myButton')
//   document.body.appendChild(btn)
//   let noBtn=document.createElement('button')
//   $(noBtn).addClass('noButton')
//   document.body.appendChild(noBtn)
// }
// // $(".myButton").animate({ opacity: 0 }, 1000)
// // $(".noButton").css({ opacity: 0 })
// // $(".noButton").animate({ opacity: 1 }, 1000)
// $(".myButton").on("mousemove", (e) => {
//     $(e.currentTarget).css("background", "chocolate")
//   })
// $(".noButton").on("mousemove", (e) => {
//   $(e.currentTarget).css("background", "saddlebrown")
// })

// ! Selectors
// console.log($('button')) // all buttons getElementsByTagName
// console.log($('#btnWithID')) // querySelector/getElementById
// console.log($('.btnWithCLS')) // querySelector/getElementsByClassName
// console.log($('.btnWithCLSsame')) // querySelectorAll/getElementsByClassName
// console.log($('button#btnWithID')) // Tag Name and ID
// console.log($('button.btnWithCLS')) // Tag Name and CLS

// ! Basic Methods
// $("#myPara1").text("New content") // Sets text content
// $(".myPara2").html("<b>New content</b>") // Sets HTML content
// $("#myPara1").attr("class", "para1cls") // Sets attribute
// $(".myPara2").attr("id", "para2id") // Sets attribute
// $("#myPara3").addClass("para3cls"); // Adds the class "para3cls"
// $("#myPara4").removeClass("para4cls"); // Removes the class "para4cls"
// $("#myPara5").toggleClass("para5cls"); // Toggles the class "para5cls"

// ! Other Methods
// ? LOAD
// $(document).load('https://api.github.com/users',(res,status)=>{
//     JSON.parse(res).map((e)=>{
//         return $('#apiJQload').append(`
//         <div class="gitDiv">
//         <a href='${e.html_url}' target="_blank">
//             <img src=${e.avatar_url} class="gitImg"/>
//         </a>
//         <p>${e.login}</p>
//         </div>
//         `)
//     })
// })
// ? AJAX
// $(document).ready(()=> {
//     $.ajax({
//       url: "https://api.github.com/users",
//       type: "GET",
//     //   data: {  //! if using POST (change type too)
//     //     key1: "value1",
//     //     key2: "value2"
//     //     // Add more data as needed
//     //   },
//       success: (res)=>{
//         res.map((e)=>{
//             return $('#apiJQload').append(`
//             <div class="gitDiv">
//             <a href='${e.html_url}' target="_blank">
//                 <img src=${e.avatar_url} class="gitImg"/>
//             </a>
//             <p>${e.login}</p>
//             </div>
//             `)
//         })
//       },
//       error: (err)=>{
//         // Handle errors
//         console.log(err.statusText)
//         $('#apiJQload').append(err.statusText);
//       }
//     });
//   });
