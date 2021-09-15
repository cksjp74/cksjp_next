import Head from "../components/head/Head"
import Layout from "../components/layout"
import font from "../styles/font.module.css"

export default function Home() {
    return (
        <>
            <Head></Head>
            <Layout>
                <p className={font.title}>日本の文化を研究する。</p>
                <p>
                    什麼，你說日文打錯了嗎？<br/>
                    好啦，我是真的不很會日文。<br/>
                    但這正是日本文化帶給我的魅力：<br/>
                    <em className={`${font.cite}`}>未知而博大精深。</em>
                </p>
            </Layout>
        </>
    )
}