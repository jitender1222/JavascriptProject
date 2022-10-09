const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody=document.querySelector('.accordian_body');
const faqs = [];

function showFaq(parentele) {
  const element=parentele.lastChild;
  const curState=element.style.display;
  element.style.display= curState==='block' ? "none" : "block";

  const newState= curState === "block" ? "none" : "block";
  const btn = parentele.firstChild.lastChild;
  btn.innerText = newState === "block" ? "-" : "+";
  
}

function createFaq() {

  const first_div=document.createElement('div');
  const header=document.createElement('div');
  const title=document.createElement('h3');
  const btn_show=document.createElement('div');
  const answer=document.createElement('p');

  first_div.setAttribute('class','faq');
  header.setAttribute('class','faq_header');
  btn_show.setAttribute('class','show_btn');
  btn_show.setAttribute("id", "show_hide");
  answer.setAttribute('class','hidden');

  btn_show.innerText='+';
  // btn_show.style.justifyContent="center";
  btn_show.style.textAlign="center";

  let return_elements={
    first_div,
    header,
    title,
    btn_show,
    answer
  }
  return return_elements;
}

faqData.forEach((value)=>{
  let store_faq=createFaq();
  store_faq.title.innerText=value.question;
  store_faq.answer.innerText=value.answer;
  store_faq.first_div.setAttribute('id',value.id);

  store_faq.first_div.append(store_faq.header);
  store_faq.header.append(store_faq.title);
  store_faq.header.append(store_faq.btn_show);
  store_faq.first_div.append(store_faq.answer);

  accordianBody.append(store_faq.first_div);  
})

function btnStatusUpdate() {

  let btn = document.querySelectorAll(".show_btn");

  btn.forEach((ele) => {
    ele.addEventListener("click", () => {
      showFaq(ele.parentNode.parentElement);
    });
  });
}

btnStatusUpdate();


