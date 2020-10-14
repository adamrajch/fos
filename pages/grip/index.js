import PageHeader from '../../components/AppLayout/PageHeader'
import Side from '../../components/AppLayout/SideBar'
const Home=()=>{
const cats=[{title:"Nail Bending",href:"/grip/nails"},{title:"Grippers",href:"/grip/grippers"},{title:"FAQs",href:"/grip/faqs"}]
return(
<div> 
<PageHeader title="Grip"/>
<Side contents={cats} />
</div>
)
}
export default Home;