// function createHtml(count, tagName, ParentSelector, attrib, content, childCount, childElement) {
//      for( let j=0; j<count; j++) {
//             let tagN = document.createElement(tagName);
//             let parent = document.querySelector(ParentSelector);
//             parent.appendChild(tagN);
            
//             if(childCount) {
//                 for(let i=0; i<childCount; i++) {
//                     let cont = document.createTextNode(content);
//                     let childE = document.createElement(childElement);
//                     childE.appendChild(cont);
//                     tagN.appendChild(childE);
//                 }
//             } else {
//                 let cont = document.createTextNode(content);
//                 tagN.appendChild(cont);
//         }
//         }
        
        
        
//     }


// createHtml(2, 'div', '#container', 'menu', 3, 'p');

//----------------------------დავალება 2 ---------------------------------

function createHtml(param) {
    for( let j=0; j<param['count']; j++) {
           let tagN = document.createElement(param['tagName']);
           let parent = document.querySelector(param['ParentSelector']);
           parent.appendChild(tagN);
           if(param['whosatt'] == 'Parent') {
               for (let i=0; i < param.attName.length; i++) {
                       tagN.setAttribute(param.attName[i], param.name[i]); 
                   }
           }
           if(param['contentwhere'] == 'Child') {
               for(let i=0; i<param['childCount']; i++) {
                   let cont = document.createTextNode(param['content']);
                   let childE = document.createElement(param['childElement']);
                   childE.appendChild(cont);
                   tagN.appendChild(childE);
                   if(param['whosatt'] == 'Child') {
                    for (let i=0; i < param.attName.length; i++) {
                            childE.setAttribute(param.attName[i], param.name[i]); 
                        }
                    }
               }
            } else if(param['contentwhere'] == 'Both') {
                let cont = document.createTextNode(param['content']);
                tagN.appendChild(cont);
                for(let i=0; i<param['childCount']; i++) {
                    let cont = document.createTextNode(param['content']);
                    let childE = document.createElement(param['childElement']);
                    
                    childE.appendChild(cont);
                    tagN.appendChild(childE);
                    if(param['whosatt'] == 'Child') {
                     for (let i=0; i < param.attName.length; i++) {
                             childE.setAttribute(param.attName[i], param.name[i]); 
                         }
                     }
                }

           } else {
               let cont = document.createTextNode(param['content']);
               tagN.appendChild(cont);
       }
       }
       
       
       
   }

   let parametrebi = {
    count: 2,  //რამდენი tagName ელემენტი დააგენერიროს
    tagName: 'div',
    ParentSelector: '#container', 
    content: 'text', //კონტენტი
    childCount: 3, //რამდენი childElement ელემენტი დააგენერიროს
    childElement: 'p',
    whosatt: 'Parent', //იღებს ორ პარამეტრს Parent და Child, მიგვითითებს ვის მიენიჭოს ატრიბუტი (attName)
    attName: ['class', 'id'], //ატრიბუტები რამდენსაც გვინდა ვწერთ
    name: ['myclass', 'myid'], //ატრიბუტის Name-ები
    contentwhere: 'Both' //იღებს სამ პარამეტრს Parent, Both და Child, მიგვითითებს სად განთავსდეს კონტენტი
   }

   createHtml(parametrebi);