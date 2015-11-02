// Get URL parameters by name
// Usage: http://page.url?parameter_name=something&another_parameter=anotherthing
function get_url_parameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
}