/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const [loading, setLoading] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let great = document.getElementById('greetings');
      great.style.display = 'block';
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1000);

    return () => {
    }

  }, [asPath]);

  return (
    <>
      {
        loading ?
          <>
            <div id="generalPreloader" className={styles.generalPreloader}>
              <div id="demoPreloader" className={`${styles.demoPreloader} aos-init aos-animate`}
              >
                {/* <div id="firstDot" className={`${styles.dot} ${styles.firstDot}`}></div>
                    <div id="secondDot" className={`${styles.dot} ${styles.secondDot}`}></div>
                    <div id="thirdDot" className={`${styles.dot} ${styles.thirdDot}`}></div> */}
                <img className="" src="/images/1488.gif"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                />
              </div>
              <div id="greetings" className={`${styles.greetings}`} style={{ display: "none" }}> <h3><strong>Bem-vindo</strong></h3></div>
            </div>
          </>
          :
          <>
            <Header
              title={generalSettings.title}
              description={generalSettings.description}
            />

            <Head>
              <title>
                Demo Animations On Scroll
              </title>
            </Head>

            <div id="backgroundImage" className={`${styles.backgroundImage}  container-fluid`}>
              <div id="backgroundColor" className={`${styles.backgroundColor}  container-fluid `}>
                <div className={`${styles.backgroundColorInfo} container-xl px-3`}>
                  <h1
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                  // data-aos-anchor-placement="top-bottom"
                  >
                    <strong>
                      Faust.js + AOS Library
                    </strong>
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                  >
                    At the time of writing this code, I was working on developing a website with <Link href="https://legacy.faustjs.org/" legacyBehavior><a target="_blank">faust.js (the legacy version)</a></Link> on the front-end and wordpress on the back-end, it was a big goal to implement loading and on scroll animations, during my research I found this amazing <Link href="https://michalsnik.github.io/aos/" legacyBehavior><a target="_blank">AOS (Animation On Scroll) library</a></Link> , so I decided to share the demo I built.
                  </p>

                  <p
                    data-aos="flip-left"
                    data-aos-offset="120"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"

                  >
                    More info in the project readme file, for now just scroll down
                  </p>
                </div>

              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl px-3 py-5"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <h2>
                  <strong>
                    What is Lorem Ipsum?
                  </strong>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <h2>
                  <strong>
                    Where does it come from?
                  </strong>
                </h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, making it over 2000 years
                  old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the word in classical literature, discovered
                  the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                  from a line in section 1.10.32.
                </p>
              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
              >
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                  by Cicero are also reproduced in their exact original form, accompanied by English
                  versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>

            <div id="" className={`${styles.bgLineColor} container-fluid`}>
              <div className="container-xl">
                <div className="row py-5">
                  <div className="col-6"
                    data-aos="slide-right"
                    data-aos-delay="0"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <h2>

                      <strong>
                        Why do we use it?
                      </strong>
                    </h2>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                  </div>
                  <div className="col-6"
                    data-aos="slide-left"
                    data-aos-delay="0"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"

                  // data-aos-anchor="#left"
                  // data-aos-anchor-placement="center-center"
                  >
                    <h2>

                      <strong>
                        Where can I get some?
                      </strong>
                    </h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div id="standardLoremIpsum" className="container-xl mt-5"
                data-aos="slide-up"
                data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1500"
                data-aos-easing="ease"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <h2>
                  <strong>
                    The standard Lorem Ipsum passage, used since the 1500s
                  </strong>
                </h2>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl"
                data-aos="slide-down"
                // data-aos-offset="200"
                data-aos-delay="0"
                data-aos-duration="1500"
                data-aos-easing="ease"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor="#standardLoremIpsum"
                data-aos-anchor-placement="top-center"
              >
                <h2>

                  <strong>
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  </strong>
                </h2>
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"                                </p>
              </div>
            </div>

            <div id="" className={`${styles.bgLine} container-fluid`}>
              <div className="container-xl">
                <div className="row py-5">
                  <div id="" className="col-12 col-sm-6"
                    data-aos="slide-right"
                    // data-aos-offset="400"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img className="img-fluid" src="/images/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg" />

                  </div>
                  <div id="" className="col-12 col-sm-6"
                    data-aos="slide-left"
                    // data-aos-offset="400"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <h2>
                      <strong>
                        1914 translation by H. Rackham
                      </strong>
                    </h2>
                    <p>
                      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl pt-5"
                data-aos="slide-right"
                // data-aos-offset="400"
                data-aos-delay="200"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <h2>

                  <strong>
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  </strong>
                </h2>
                <p>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
              </div>
            </div>

            <div className="container-fluid">
              <div className="container-xl">
                <div className="row py-5">

                  <div id="translationRackham" className="col-12 col-sm-6"
                    data-aos="fade-left"
                    // data-aos-offset="400"
                    data-aos-delay="200"
                    data-aos-duration="2500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <h2>
                      <strong>
                        1914 translation by H. Rackham
                      </strong>
                    </h2>
                    <p>
                      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                  </div>

                  <div id="" className="col-12 col-sm-6"
                    data-aos="fade-left"
                    // data-aos-offset="400"
                    data-aos-delay="0"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    // data-aos-anchor="#translationRackham"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <img className="img-fluid" src="/images/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg" />

                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div id="" className="container-xl"
                data-aos="fade-right"
                // data-aos-offset="400"
                data-aos-delay="0"
                data-aos-duration="2000"
                data-aos-easing="ease"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </p>
              </div>
            </div>

            <Footer copyrightHolder={generalSettings.title} />

          </>
      }
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
