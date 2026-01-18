import React, {} from "react";
import { faqsData } from "./faqsData";
import FAQ from "./FAQ"
import style from "./faqs.module.css"

const FAQs = () => {

    return(
        <main className={style.container}>
            <section className={style.faqs}>
                <h1>FAQs</h1>
                { faqsData.map(faq => <FAQ key={faq.id} faq={faq} />) }
            </section>
        </main>
    )
}

export default FAQs;