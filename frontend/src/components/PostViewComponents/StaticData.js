import pic1 from '../../images/shivalord.jpg'
import pic2 from '../../images/coding.jpg'
import pic3 from '../../images/coding1.jpg'
const projectListData =()=>{
    const initalData = [
        {name:"DEVI SURYA",
        location:"HYDERABAD",
        likes:64,
        description: "IAM A BIG HERO",
        PostImage: pic1,
        date: new Date().toString().slice(4,15),
        }
        ];
        return initalData
}
export default projectListData