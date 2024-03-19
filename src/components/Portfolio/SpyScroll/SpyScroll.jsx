import React, { useRef } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { 
    MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBScrollspy, 
    MDBScrollspyLink, 
    MDBScrollspySubList 
} from 'mdb-react-ui-kit';

export default function SpyScroll() {
  const collapseSection1 = useRef(null);
  const collapseSection2 = useRef(null);
  const collapseSection3 = useRef(null);
  const collapseSection4 = useRef(null);
  const collapseSectionA = useRef(null);
  const collapseSectionB = useRef(null);

  const collapseContainerRef = useRef(null);

  const collapseSubsections = [collapseSectionA, collapseSectionB];

  return (
    <div className='spy-scroll' id='spy-scroll'>
     
    <MDBContainer className='bg-black text-white shadow'>
      <MDBRow className='row d-flex '>
     
        <MDBCol md='8' className='w3-padding-32'>
        <div id='collapse' ref={collapseContainerRef} className='scrollspy-example' style={{ height: '500px', overflowY: 'auto' }}>
           
           <div className='container w3-padding-large'>
            <section ref={collapseSection1} id='section-collapse-1 '>
              <h3>Section 01.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
              <h3>Section 02.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
              <h3>Section 03.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <section ref={collapseSectionA} id='subsection-collapse-a'>
                <h3>Subsection A.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
              <section ref={collapseSectionB} id='subsection-collapse-b'>
                <h3>Subsection B.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                  maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                  quaerat accusamus numquam.
                </p>
              </section>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
              <h3>Section 04.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore earum natus vel minima quod error
                maxime, molestias ut. Fuga dignissimos nisi nemo necessitatibus quisquam obcaecati et reiciendis
                quaerat accusamus numquam.
              </p>
            </section>
          </div>
          </div>
        </MDBCol>

        <MDBCol md='4'className='w3-padding-16 justify-content-center align-items-center bg-black border-top'>
          <MDBScrollspy container={collapseContainerRef} className='text-white w3-padding-large'>
            <MDBScrollspyLink targetRef={collapseSection1}
            className='py-2 text-white' style={{fontSize:'1rem'}}
            >Section 01.</MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}
             className='py-2 text-white' style={{fontSize:'1rem'}}
             >Section 02.</MDBScrollspyLink>
            <MDBScrollspyLink collapsible subsections={collapseSubsections} targetRef={collapseSection3}
             className='py-2 text-white' style={{fontSize:'1rem'}}
             >
              Section 03.
            </MDBScrollspyLink>
            <MDBScrollspySubList className='ps-3 text-white' collapsible={collapseSubsections}>
              <MDBScrollspyLink targetRef={collapseSectionA}
               className='py-2 text-white' style={{fontSize:'1rem'}}
               >Subsection A.</MDBScrollspyLink>
              <MDBScrollspyLink targetRef={collapseSectionB}
               className='py-2 text-white' style={{fontSize:'1rem'}}
               >Subsection B.</MDBScrollspyLink>
            </MDBScrollspySubList>
            <MDBScrollspyLink targetRef={collapseSection4}
             className='py-2 text-white' style={{fontSize:'1rem'}}
             >Section 04.</MDBScrollspyLink>
          </MDBScrollspy>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}