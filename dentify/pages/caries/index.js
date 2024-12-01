import AboutUs from '@/react-components/AboutUs';

export default function CariesDetail(props) {
    return(
        <AboutUs titleText="Caries" data = {props.arr}/>
    );

}

export async function getStaticProps () {
    const arr1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis elit quis eros fermentum, nec gravida lorem volutpat. Crasfeugiat, massa vel dignissim convallis, lectus augue facilisis metus,eget tristique neque felis non metus."
    const arr2 = "Aenean nec suscipit nulla. Mauris varius vehicula sapien, a fringilla ipsum. Pellentesque id leo vitae lacus tincidunt auctor. Integer hendrerit, lorem at commodo fringilla, elit justo fermentum lacus, in pharetra velit nisi ut felis. Fusce euismod eget lectus id viverra."
    const arr3 = "Quisque sit amet venenatis arcu. Nullam tempus, eros at tempus vestibulum, erat lorem viverra arcu, sit amet hendrerit nisl felis non ante. Duis tincidunt dapibus neque, non malesuada enim vehicula at."

    const combinedArray = [arr1, arr2, arr3];
    console.log(combinedArray);

    return{
        props: {
            arr: combinedArray
        }
    }
}