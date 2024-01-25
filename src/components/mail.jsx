
export default function Mail(props){
    return(
        <div className="bg-white rounded-lg h-max" style={{width:"40rem"}}  >
            <div className="header bg-gray-100 py-2 px-8 rounded-t-lg font-semibold flex justify-between items-center">
          <div className="flex gap-2 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>
 {props.title} <span>Mail from {props.sender}</span>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#495969" className="w-4 h-4">
  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
</svg>

            </div>
            <div className="content px-8 py-2">
                <div className="sender my-4  flex justify-between">
                    <h2 className="font-bold text-2xl">{props.sender}</h2>
                    <span className="time text-gray-500 text-sm">Just now</span>
                </div>
                <div className="mail-title my-2 font-bold text-3xl">
                     {props.mailTitle}
                </div>
                <div className="mail-body my-6 ">{props.mailBody}
                                    </div>
                <div className="buttons flex gap-6 my-6">
                    <button className="text-gray-600 bg-gray-100 p-3 rounded-full w-24 font-semibold">Reply</button>
                    <button className="text-gray-600 bg-gray-100 p-3 rounded-full w-24 font-semibold">Forward</button>
                    <button className="text-gray-600 bg-gray-100 p-3 rounded-full w-24 font-semibold">Delete</button>
                </div>
            </div>
        </div>
    )
} 