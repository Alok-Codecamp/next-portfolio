"use client"
import { FeaturedWorks } from '../featuredWorks/FeaturedWorks';
import { AndroidSkillsCard, BackEndSkillsCard, FrontEndSkillsCard } from '../skillCard/SkillCard';
import { frontEndSkill } from './constant';
import styles from './homePage.module.css'
import ThemeProvider, { useDarkmode } from '@/app/theme-provider';
import { motion } from "framer-motion";


const HomePage = () => {
  const { darkmode } = useDarkmode()

  return (
    <ThemeProvider>
      <main className='dark:bg-[#000000] dark:text-amber-50'>

        {/* header banner section  */}
        <header className="">

          <section className={darkmode ? styles.bannerDark : styles.bannerLight}>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              className={styles.resume}
            >
              <a href="/resume.pdf" download>Download Resume</a>
            </motion.div>

          </section>
        </header>

        {/* skill section  */}
        <section className={`${darkmode ? styles.skillDark : styles.skillLight} py-10 `}>
          <h2 className='text-center text-4xl mb-8'>Skills & Expertise</h2>
          {/* Front end section  */}
          <div className={`text-center xl:flex lg:flex md:flex justify-center items-center gap-16 py-16 px-20 ml-auto mr-auto ${!darkmode ? 'bg-[#D8D7D8] ' : 'bg-black'} shadow-lg rounded-md`}>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <FrontEndSkillsCard darkmode={darkmode} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <BackEndSkillsCard darkmode={darkmode} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <AndroidSkillsCard darkmode={darkmode} />
            </motion.div>
          </div>

        </section>
        {/* fetured word section  */}
        <section className={darkmode ? styles.featuredWorksDark : styles.featuredWorksLight}>
          <h2 className='text-center text-4xl mb-8' >Featured Work</h2>
          <div className=' xl:flex grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
            >
              <FeaturedWorks darkmode={darkmode} />
            </motion.div>

          </div>
        </section>

        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ab quisquam molestiae illo aliquid rem ex pariatur quam! At beatae atque iste blanditiis ab earum similique cumque dolorum, totam sit vitae perferendis necessitatibus. Provident nesciunt omnis pariatur, cumque vel aut nisi corrupti ut similique culpa dolore accusamus consequuntur facere unde debitis amet est temporibus libero voluptatibus asperiores. Quasi eos at suscipit necessitatibus ipsum delectus quam voluptatum quaerat temporibus distinctio, non ipsa dolor ut. Reprehenderit maiores mollitia, nisi iusto deleniti aliquam assumenda eveniet dolore saepe nemo sapiente corporis debitis ducimus culpa tenetur rerum tempora ad commodi enim. Voluptatibus aliquam iste velit recusandae reprehenderit id optio inventore dolorem quam corrupti eaque quas quod iusto architecto est error exercitationem similique, alias magni voluptatem quia porro! Rem asperiores sint quis vitae, quo nesciunt adipisci perferendis blanditiis labore, ex nulla voluptatibus alias necessitatibus libero hic iusto quos at sequi explicabo assumenda, ipsum maxime excepturi natus. Dolorem accusamus velit tenetur, sequi quos animi magni necessitatibus dolorum, sit soluta nobis similique tempore eligendi obcaecati quam, quisquam iste non illum nihil vero? Nesciunt deleniti ab numquam similique eaque sit laborum, veniam minus voluptates optio tenetur quis repellendus debitis earum vero error voluptate perferendis porro vel omnis rem voluptatum qui? Eum corporis tenetur ducimus cumque officiis molestias quae quis. Exercitationem, atque. Odio explicabo neque, porro asperiores incidunt nemo quos magni vel adipisci. Perspiciatis at iusto earum tenetur sunt magnam possimus, debitis cupiditate autem delectus quibusdam, quae qui harum culpa dicta tempore mollitia aperiam, assumenda nam labore facilis? Soluta, iure dolorem? Laudantium corrupti facere sed ut neque adipisci, voluptatibus id quibusdam fugiat libero aut. Non sed quis, saepe consequatur quas nam corporis nihil iusto neque cum consectetur hic fuga reiciendis pariatur! Cumque maiores, laudantium praesentium reprehenderit natus repellendus laboriosam, incidunt in ipsum, obcaecati temporibus non a aliquid facilis sunt fugiat animi totam quaerat voluptas aspernatur minus! Laboriosam saepe vel molestiae eveniet dolorum tempore eaque tenetur sunt deserunt adipisci ea optio repudiandae animi, esse aut quae natus quas voluptates eligendi! Quo blanditiis, eveniet repudiandae incidunt, quam cum molestias commodi accusantium, aspernatur necessitatibus totam ab iusto atque nulla mollitia neque ex vitae! Repellendus praesentium expedita, voluptas molestias officiis neque ab deserunt error minima quo cupiditate doloremque vel commodi consequuntur vero laborum beatae dolore ipsum similique doloribus laudantium. Veniam placeat dolorum culpa necessitatibus asperiores optio tenetur facilis libero consectetur, laboriosam sit odit eveniet quia non iusto est molestias fugit perferendis totam nam labore! Perferendis tenetur neque dolorum tempora rem odio ipsam magnam aliquid illum? Nihil veritatis sequi fuga sapiente laudantium enim vitae omnis quae quibusdam exercitationem, pariatur rerum non tempore eum voluptatibus qui expedita explicabo itaque id cupiditate. Minus doloribus similique, quo quasi consectetur voluptatibus ut, error asperiores aspernatur dolore odio. Distinctio earum quod perferendis impedit quisquam nulla adipisci quibusdam assumenda placeat? Fuga, atque voluptate. Nihil pariatur vero unde enim quisquam omnis? Ipsam asperiores veniam facilis quo modi laboriosam laudantium ipsum exercitationem eius, sit atque iusto vitae neque suscipit distinctio quas qui est consequatur quasi, assumenda quam libero necessitatibus quia ducimus. Ratione, provident.
        </section>
      </main>
    </ThemeProvider>
  );
}

export default HomePage;
