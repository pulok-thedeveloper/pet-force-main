import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const icon = form.icon.value;
        const image = form.img.value;
        const details = form.details.value;


        const service ={
            title,
            description,
            icon,
            image,
            details,
        }
        console.log(service)

        fetch('https://pet-force-server.vercel.app/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            console.log(data)})
            toast("Service Added!")
        .catch(err=> console.error(err));
    }
    return (
        <div className='p-16'>
            <h1 className='text-3xl mb-8'>Add New Service</h1>
            <form onSubmit={handleAddService} className=' mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name="title" type="text" placeholder="Service Title" className="px-5 py-2 input-focus outline-none rounded-full w-full" />
                    <input name="description" type="text" placeholder="Short Description" className="px-5 py-2 input-focus outline-none rounded-full w-full" />
                    <input name="icon" type="text" placeholder="Icon URL" className="px-5 py-2 input-focus outline-none rounded-full w-full" />
                    <input name="img" type="text" placeholder="Image URL" className="px-5 py-2 input-focus outline-none rounded-full w-full" />
                </div>
                <textarea name="details" className="px-5 py-2 input-focus outline-none rounded-lg h-24 w-full mb-3" placeholder="Service Details"></textarea>
                <input className='rounded-full primary-btn py-2 px-5 cursor-pointer font-semibold text-white' type="submit" value="Add New Service"/>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;