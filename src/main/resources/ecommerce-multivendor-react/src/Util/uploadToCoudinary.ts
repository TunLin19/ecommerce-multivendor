export const uploadToCloudinary = async (pics: any) => {
    const cloud_name = "tuanlinh"
    const upload_preset = "e-commerce"

    if (pics) {
        const formData = new FormData()
        formData.append("file", pics)
        formData.append("upload_preset", upload_preset)
        formData.append("cloud_name", cloud_name)
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
            method: "POST",
            body: formData
        })
        const data = await response.json()
        return data.url;
    }
    else {
        console.log("error : pics is found")
    }
}