class SupportMaterial{
    constructor(type, description, link, tags, title, previewImageURL, fileURL) {
        this._type = type;
        this._description = description;
        this._link = link;
        this._tags = tags;
        this._title = title;
        this._previewImageURL = previewImageURL;
        this._fileURL = fileURL;
    } 

    get type() {
        return this._type;
    }
    get description() {
        return this._description;
    }
    get link() {
        return this._link;
    }
    get tags() {
        return this._tags;
    }
    get title() {
        return this._title;
    }
    get previewImageURL() {
        return this._previewImageURL;
    }
    get fileURL() {
        return this._fileURL;
    }
}

export default SupportMaterial;

export const createSupportMaterialFromJSON = (json)  => {
    const material = new SupportMaterial(
        json.type, 
        json.description,
        json.link,
        json.tags,
        json.title,
        json.preview_image,
        json.file,
        );
    return material;
}

export const createArraySupportMaterialFromJSON = (jsonArray)  => {
    return jsonArray.map((jsonMaterial) => {
         return createSupportMaterialFromJSON(jsonMaterial);
    })
}
