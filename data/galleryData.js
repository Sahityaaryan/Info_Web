const galleryData = [
    {
        id:1,
        title:"Event1",

        images:[
            "/images/team/img1.jpeg",
           "/images/team/img1.jpeg",
           "/images/team/img1.jpeg",
        ]
    },
    {
        id:2,
        title:"Event2",

        images:[
            "/images/team/shal2.jpeg",
            "/images/team/shal2.jpeg",
            "/images/team/shal2.jpeg",
        ]
    },

]


const galleryIdArray = galleryData.map((ele)=>(ele.id))

export {
    galleryIdArray,
    galleryData
}