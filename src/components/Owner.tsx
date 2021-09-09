const Owner = () => {
    return (
        <div className="p-2">
            {/* post container */}
            <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

                {/* ส่วนของเจ้าของ post */}
                <div className="space-y-2">

                    {/* image and name */}
                    <div className="flex space-x-2 items-center">
                        <img className="w-12 h-12 rounded-full" src="/profileImages/hs.png"></img>
                        <span className='font-semibold text-lg'>Tananun Chowdee 630610735</span>
                    </div>

                    {/* status message */}
                    <p>Quiz ยากจังเลยครับ ของ่าย ๆ กว่านี้ได้ไหม #261207</p>

                    {/* like section */}
                    <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>100 คน</p>
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Owner