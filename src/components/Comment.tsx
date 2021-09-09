import { useState } from "react"


type CommentType = {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: CommentType[]
}

const Comment = ({ username, userImagePath, commentText, likeNum }: CommentType)=>{
    return (
        <div className="">
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{username}</p>
                    <p>{commentText}</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    {(likeNum > 0) ? <div className='flex items-center'>
                        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                        <p className='text-gray-500'>{likeNum}</p>
                    </div> : ''}

                </div>
            </div>
        </div>
    )

}

export default Comment