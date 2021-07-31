class El{

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
        let el = this.attr('wdio', name);
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

};

module.exports = new El()