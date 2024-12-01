import TeamMember from '@/react-components/TeamMember';
import {findAgainstId} from '@/dummy-data/data'
import {returnArr} from '@/dummy-data/data'

export default function displaySpecialist(props){
    const doctorStuff = props.doctor
    return (<TeamMember specialist = {doctorStuff}/>);
}

export async function getStaticProps(context) {
    const id = context.params.doctor
    console.log(id)
    const doctorDeets = findAgainstId(id)
    console.log (doctorDeets)
    return{
        props:{
            doctor: doctorDeets
        }
    };
}

export async function getStaticPaths() {
    const arr = returnArr()
    const IDs = arr.map(item => ({ params: { doctor: item.id.toString()}}));
    return {
        paths: IDs,
        fallback: false
    }; 
}