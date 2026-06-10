export default function UrlInput({
    url,
    setUrl,
}){
    return(
        <input type="text"
        placeholder="Enter API Url" 
        value={url}
        onChange={(e)=> setUrl(e.target.value)}
        className="url-input"/>
    );
}