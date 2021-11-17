import { defineComponent } from 'vue';
// import '@styles/index.css';
import styles from '@styles/test.module.css'
import '@styles/test.less'
import test from './test?raw'
console.log(test)
export default defineComponent({
    setup(){
        return () => {
            return <div class={`root ${styles.testModules}`}>hello vue</div>
        }
    }
})