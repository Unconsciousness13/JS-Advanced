function extensibleObject() {

    let obj = {};

    obj.extend = (template) => {
        Object.entries(template).forEach(([k, v]) => {
            if (typeof v === 'function') {
                Object.getPrototypeOf(obj)[k] = v;
            } else {
                obj[k] = v;
            }
        })
    }

    return obj;
}