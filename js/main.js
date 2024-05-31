
/** get Id for element html */
var bookMrakName=document.getElementById('bookMarkName');
var BookMarkurl=document.getElementById('BookMarkUrl');

var BookMarkBtn=document.getElementById('btn');

var tbody=document.getElementById('tbody');
var close =document.getElementById('close');



/**add Item */


var bookList;


if(localStorage.getItem('list')!=null)
  {
    bookList= JSON.parse(localStorage.getItem('list'));

    console.log(bookList)
    Display(bookList);
  }

  else
  {

    bookList=[];


  }

  /**********add new booMark************ */

function addBookMark()
{


  if(validationName() &&validationUrl())
    {

        
  BookMarkBtn.removeAttribute('data-bs-toggle');
  BookMarkBtn.removeAttribute('data-bs-target');
  var arrayObj={

    bookMrakname:bookMrakName.value,
    Bookmarkurl:BookMarkurl.value
  };

  bookList.push(arrayObj);

  localStorage.setItem('list',JSON.stringify(bookList));

  console.log(bookList);
  clearform();
  Display(bookList);

}

else
{

        
  BookMarkBtn.setAttribute('data-bs-toggle','modal');
  BookMarkBtn.setAttribute('data-bs-target','#exampleModal');
  
}

}


/*********************close dialog button*********** */
close.onclick=function()
{

  BookMarkBtn.removeAttribute('data-bs-toggle');
  BookMarkBtn.removeAttribute('data-bs-target');

}

/**********clear form************ */
function clearform()
{
  bookMrakName.value=null;
  BookMarkurl.value=null;

  BookMarkurl.classList.remove('is-invalid');
  BookMarkurl.classList.remove('is-valid');
  bookMrakName.classList.remove('is-valid');
  bookMrakName.classList.remove('is-invalid');



}



/** Delete  */

function Delete(index)
{


  bookList.splice(index,1);
  localStorage.setItem('list',JSON.stringify(bookList));

  Display(bookList);

}

/**visit url */
function visitUrl(index)
{

  location.href=`http://${bookList[index].Bookmarkurl}`;

  console.log(bookList[i].Bookmarkurl);
}

function Display(bookList)
{
  var tableData='';
  for(var i=0;i<bookList.length;i++)
    {

      tableData+=` <tr class="text-center">
      <td >${i+1}</td>
      <td>${bookList[i].bookMrakname}</td>
      <td  >
        <button class="mx-auto btn btn-success d-flex gap-2 justify-content-center  align-items-center" type="button" onclick="visitUrl(${i})">
          <i class="fa-sharp fa-solid fa-eye"></i>

          Visit
        </button>

       
      </td>
      <td  >
        <button class="btn mx-auto btn-danger d-flex gap-2 justify-content-center  align-items-center" type="button" onclick="Delete(${i})">
          <i class=" fa-solid fa-trash"></i>

          Delete
        </button>
      </td>
    </tr> `;
    }

    tbody.innerHTML=tableData;
}


/**btn click */
BookMarkBtn.onclick=function()
{

  addBookMark();
  
}


/** validation */
function validationName()
{
  var regexName=/^.{3,}$/;


  if(regexName.test(bookMrakName.value))
    {
 

      bookMrakName.classList.add('is-valid');
      bookMrakName.classList.remove('is-invalid');
      return true;
    }
    
    else
    {
      bookMrakName.classList.remove('is-valid');
      bookMrakName.classList.add('is-invalid');
      return false;
    }

}

 
function validationUrl()
{
  const regexUrl = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.com$/;


  if(regexUrl.test(BookMarkurl.value))
    {
 

      BookMarkurl.classList.add('is-valid');
      BookMarkurl.classList.remove('is-invalid')

      return true;
    }
    
    else
    {
      BookMarkurl.classList.remove('is-valid');
      BookMarkurl.classList.add('is-invalid');

      return false;

    }

}
