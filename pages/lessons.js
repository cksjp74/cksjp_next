import Head from '../components/general/head'
import Layout from '../components/layout'

import styles from '../styles/page/lessons.module.sass'

export default function Lessons () {
	return (<>
		<Head title={"社團課程"}/>
		<Layout>
			<h1>社團課程</h1>
			<hr/>
			<div className={styles.lessonsWrapper}>
				<Lesson title='日本電子音樂' content='Vocaloid的歷史與發展'/>
				<Lesson unavailable title='二戰日本' content=''/>
				<Lesson unavailable title='ACG文化' content=''/>
				<Lesson unavailable title='花牌' content=''/>
				<Lesson unavailable title='日本神話' content=''/>
				<Lesson unavailable title='日本傳統音樂與戲曲' content=''/>
			</div>
		</Layout>
	</>)
}

function Lesson({title, content, unavailable}) {
	return (
		<div className={styles.lessonBlock + ' ' + (unavailable ? styles.lessonUnavailable : '')}>
			<p className={styles.lessonTitle}>{title}</p>
			<p className={styles.lessonContent}>{content}</p>
		</div>
	)
}