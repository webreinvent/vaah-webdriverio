export default class Selector{

    //-----------------------------------------------------
    id(id)
    {
        return $("#"+id);
    }
    //-----------------------------------------------------
    class(name)
    {
        return $("."+name);
    }
    //-----------------------------------------------------
    $(selector)
    {
        return $(selector);
    }
    //-----------------------------------------------------
    child(parent, child)
    {
        return $(parent).$$(child);
    }
    //-----------------------------------------------------
    attr(attribute, value)
    {
        return $('['+attribute+'="'+value+'"]');
    }
    //-----------------------------------------------------
    name(name,value=null)
    {
        let el = this.attr('name', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    wdio(name,value=null)
    {
        let el = this.attr('data-wdio', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    dusk(name,value=null)
    {
        let el = this.attr('dusk', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    role(name)
    {
        return this.attr('role', name);
    }
    //-----------------------------------------------------
    testid(name,value=null)
    {
        let el = this.attr('data-testid', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    arialabel(name, value=null)
    {
        let el = this.attr('aria-label', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    placeholder(name, value=null){
        let el = this.attr('placeholder', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    title(name, value=null){
        let el = this.attr('title', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    href(name, value=null){
        let el = this.attr('href', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
    value(name, value=null){
        let el = this.attr('value', name);
        if(value)
        {
            el.setValue(value)
        }
        return el;
    }
    //-----------------------------------------------------
}