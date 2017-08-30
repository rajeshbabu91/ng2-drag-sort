source: any;

    isbefore(a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) { 
                    return true;
                }
            }
        }
        return false;
    }
    
    dragenter(e) {
        if (this.isbefore(this.source, e.target)) {
            e.target.parentNode.insertBefore(this.source, e.target);
        }
        else {
            e.target.parentNode.insertBefore(this.source, e.target.nextSibling);
        }
    }
    
    dragstart(e) {
        this.source = e.target;
        e.dataTransfer.effectAllowed = 'move';
    }
