import React from 'react'

export default function About() {
  return (
    <div className="container"> 
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
      <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Website
          </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <strong>This is TextUtiils.</strong> You can use our website in analyzing your text or manupulating it. As you can see you can change your text to upper or lower case or you can gernate random text and use it and even there are another many features which helps you to manipulate your text.
          </div>
      </div>
      </div>
      <div className="accordion-item">
      <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Devloper
          </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <strong>Devloper Name - Tanishq lather.</strong> This website TextUtills made with Lots of Love by Tanishq lather.
          </div>      
      </div>
      </div>
      <div className="accordion-item">
      <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact us -
          </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Linkedin -</strong> Tanishq lather |
                <strong>  Twitter (X) -</strong> Tanishq lather |
                <strong>  Email -</strong> tanishqlather@gmail.com |
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
