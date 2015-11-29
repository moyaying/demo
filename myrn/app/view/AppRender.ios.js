/**
 * Created by moo on 15/11/29.
 */
'use strict';

import Render from './AppRender.native';

export default function(){
    return Render.call(this, this.props, this.state);
}