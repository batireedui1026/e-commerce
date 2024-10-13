import { FaHeart } from "react-icons/fa";
const Save = () => {
    return(
        <div className="bg-gray-200">
            <h1 className="text-2xl font-semibold pl-72">Хадгалсан бараа</h1>
              <div className="flex justify-between border border-rounded mt-5 max-w-[600px] mx-auto bg-white    ">
                <div className="flex gap-6">
                    <img src="https://s3-alpha-sig.figma.com/img/6b65/edf5/a857be2cdc56b0c4d9935e213699b666?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqxM8~e0-x5Hh1AYO2y4StBpc681L1qSzWRj4MWQJQAqRqb6qJtrVJEyhNaXyxJ1oB1j2tyGmGUyOV7Ygby22Xe2DciPkd6X2lw9AVayX3UNimQqp0L3zSNLHNAwQR3V0CtQEGN9~w8cMUZtjNmZ4j-wGGxVoENcQ2v3peBOfT1aPRMMvbpn3tekx2bBiwQaWwlJ8NBOQnKXB7rnnQKTG9rjK7rtGOZlz2P0CnTbEYCgLOQJBxboYRMJypIducqEfEzWy08HMRKF-EXSEh7XsBdWrcVavhE4TU-3rDqJSiSQSeyAeuzcpTxslhPG16tlQtZTS55RX5h29sSt9fpWNw__" className="w-32 h-32 object-cover rounded my-3 ml-3"></img>
                    <div className="flex  gap-3 pt-3 flex-col">
                        <p>Chunky</p>
                        <p className="font-bold">120’000₮</p>
                         <button className="btn w-32 h-8 bg-blue-600 rounded-xl text-white">Сагслах</button>
                    </div>
                </div>
                    
                <FaHeart className="text-2xl mr-2 mt-2" />
              </div>
           
        </div>
    )
}
export default Save;