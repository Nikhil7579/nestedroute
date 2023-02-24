import React from 'react'

const Blog = () => {
    return (
        <>
            <div>
                <div className='blog_main'>
                    <div className='blog_image'>
                        <img src="/logo192.png" alt="react js" />
                    </div>
                    <div className='blog_content'>
                        <h4>24/02/2023</h4>
                        <h3>Node JS</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor fugiat assumenda ipsa repellendus corporis, officiis libero nam inventore dicta repudiandae a exercitationem aliquam expedita delectus hic veritatis. Laborum, enim velit!</h5>
                    </div>
                </div>
                <div className='blog_main'>
                    <div className='blog_image'>
                        <img src="/logo192.png" alt="react js" />
                    </div>
                    <div className='blog_content'>
                        <h4>23/02/2023</h4>
                        <h3>React JS</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor fugiat assumenda ipsa repellendus corporis, officiis libero nam inventore dicta repudiandae a exercitationem aliquam expedita delectus hic veritatis. Laborum, enim velit!</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
