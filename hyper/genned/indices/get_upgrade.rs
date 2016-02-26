//Autogenerated
use hyper::Client;
pub fn get(base: String) -> String{
    let mut url_fmtd = String::with_capacity(base.len() + 9);
    url_fmtd.push_str(&base);
    url_fmtd.push_str("/_upgrade");
    url_fmtd
}
pub fn get_index(base: String, index: String) -> String{
    let mut url_fmtd =
        String::with_capacity(base.len() + 1 + 9 + index.len());
    url_fmtd.push_str(&base);
    url_fmtd.push_str("/");
    url_fmtd.push_str(&index);
    url_fmtd.push_str("/_upgrade");
    url_fmtd
}
