class El{

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

    icon(name,value=null)
    {
        let el = this.attr('data-icon', name);
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

    dynamic(selector_name, selector_type='dusk'){
        let el;
        switch (selector_type)
        {
            case 'dusk':
                el = this.dusk(selector_name);
                break;

        }
        return el;
    }

    //-----------------------------------------------------
}
module.exports = new El()
//----------------------------------------------------------------------------------------------------------------------