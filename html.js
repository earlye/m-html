m.module({
    name:"html",
    src: document.currentScript.src,

    _appendChildren: function( element, children ) {
        if ( Array.isArray(children)) {
            children.forEach(function(child){
                if ( typeof child == 'string' ) {
                    element.appendChild(document.createTextNode(child));
                } else if ( typeof child == 'undefined' || child == null) {
                    // do nothing.
                } else {
                    element.appendChild(child);
                }
            });
        }
    },

    _createElement : function( elementType, children, classes, attributeMap ) {
        var result = document.createElement(elementType);
        this._appendChildren(result,children);
        this._setClasses(result,classes); 
        this._setAttributeMap(result,attributeMap);
        return result;
    },

    _replaceFirstChild : function( parent, child ) {
        if( !parent.hasChildNodes() ) {
            parent.appendChild(child);
        } else {
            parent.replaceChild(child,parent.firstChild);
        } 
    },

    _setAttributeMap : function( element, attributeMap ) {
        for( var key in attributeMap ) {
            element.setAttribute( key , attributeMap[key] );
        }
    },

    _setClasses : function( element, classes ) {
        if ( typeof classes == 'undefined' || classes == null ) {
            return;
        }
        
        if ( Array.isArray(classes)) {
            if ( classes.length == 1 )
                element.className = classes[0];
            else
                classes.forEach(function(entry) {
                    element.classList.add(entry);
                });
        }
    },

    br: function(classes,attributeMap) {
        return this._createElement('br',null,classes,attributeMap);
    },

    button: function(children,onclick,classes,attributeMap) {
        var result = this._createElement('button',children,classes,attributeMap);
        result.onclick = onclick;
        return result;
    },

    div: function(children,classes,attributeMap) {
        return this._createElement('div',children,classes,attributeMap);
    },

    img: function(src,classes,attributeMap) {
        var result = this._createElement('img',null,classes,attributeMap);
        result.src = src;
        return result;
    },

    input_text : function(value,classes,attributeMap) {
        var result = this._createElement('input',null,classes,attributeMap);
        result.type = 'text';
        return result;
    },

    li : function(children,classes,attributeMap) {
        return this._createElement('li',children,classes,attributeMap);
    },

    option: function(children,classes,attributeMap) {
        return this._createElement('option',children,classes,attributeMap);
    },

    select: function(options,classes,attributeMap) {
        var children = [];
        options.forEach(function(entry){children.push(this.option([entry]))}.bind(this));
        return this._createElement('select',children,classes,attributeMap);
    },

    table: function(children,classes,attributeMap) {
        return this._createElement('table',children,classes,attributeMap);
    },

    td : function(children,classes,attributeMap) {
        return this._createElement('td',children,classes,attributeMap);
    },

    tr : function(children,classes,attributeMap) {
        return this._createElement('tr',children,classes,attributeMap);
    },

    ul : function(items,classes,attributeMap) {
        var children = [];
        items.forEach(function(entry){
            if(entry)
            {
                children.push(this.li([entry]));
            }
        }.bind(this));
        return this._createElement('ul',children,classes,attributeMap);
    }

});
