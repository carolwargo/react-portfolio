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
    <div className='spy-scroll ' id='spy-scroll'>
     
    <MDBContainer className='w3-content shadow bg-white w3-padding-32 w3-padding-large px-lg-5'>
      <MDBRow className='d-flex justify-content-center '>
        
        <MDBCol md='8' className=''>
        <div id='collapse' ref={collapseContainerRef} className='scrollspy-example' style={{ height: '500px', overflowY: 'auto' }}>
            <section ref={collapseSection1} id='section-collapse-1'>
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
        </MDBCol>

        <MDBCol md='4'className='flex-column w3-padding-large justify-content-center align-items-center'>
          <MDBScrollspy container={collapseContainerRef}>
            <MDBScrollspyLink targetRef={collapseSection1}
            className='py-2' style={{fontSize:'2rem'}}
            >Section 01.</MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}
             className='py-2' style={{fontSize:'2rem'}}
             >Section 02.</MDBScrollspyLink>
            <MDBScrollspyLink collapsible subsections={collapseSubsections} targetRef={collapseSection3}
             className='py-2' style={{fontSize:'2rem'}}
             >
              Section 03.
            </MDBScrollspyLink>
            <MDBScrollspySubList className='ps-3' collapsible={collapseSubsections}>
              <MDBScrollspyLink targetRef={collapseSectionA}
               className='py-2' style={{fontSize:'2rem'}}
               >Subsection A.</MDBScrollspyLink>
              <MDBScrollspyLink targetRef={collapseSectionB}
               className='py-2' style={{fontSize:'2rem'}}
               >Subsection B.</MDBScrollspyLink>
            </MDBScrollspySubList>
            <MDBScrollspyLink targetRef={collapseSection4}
             className='py-2' style={{fontSize:'2rem'}}
             >Section 04.</MDBScrollspyLink>
          </MDBScrollspy>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}