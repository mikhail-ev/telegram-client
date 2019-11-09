function mountTemplate(containerId, templateId) {
    var container = document.getElementById(containerId);
    var template = document.getElementById(templateId);
    container.innerHTML = template.innerHTML;
}