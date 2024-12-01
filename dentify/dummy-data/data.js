import dr1 from '@/public/image6.png'
import dr2 from '@/public/image7.png'
import dr3 from '@/public/image8.png'
import dr4 from '@/public/image9.png'
const specialistArray = [{
    id: "1",
    img: dr1,
    name: "Jim Carry",
    designation: "Orthodontist"
  },
  {
    id: "2",
    img: dr2,
    name: "Wade Warren",
    designation: "Endodontist."
  },
  {
    id: "3",
    img: dr3,
    name: "Jenny Wilson",
    designation: "Periodontist."
  },
  {
    id: "4",
    img: dr4,
    name: "Jacob Jones",
    designation: "Pediatric Dentist."
  }
]
export const findAgainstId = (id) => {
  
    return specialistArray.find(item=> item.id.toString()=== id)
}

export const returnArr = () => {
    return specialistArray
}
