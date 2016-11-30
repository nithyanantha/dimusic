"use strict";
class ErrorBase extends Error {
  constructor(name,statusCode,message) {
    super();
    this.name = name; 
    this.stack = (new Error()).stack;
    if(statusCode==undefined|| null)
    {
    	this.statusCode=500;
    }
    else
    {
    this.statusCode = statusCode;
	  }

  if(message==undefined || null)
  {
    this.message = '';
  }
  else
  {
    this.message = ': ' + message;
  }

    
  }
}    


module.exports = class ErrorMessage extends ErrorBase {
  constructor(n,s,m) {   
    super(n,s,m);
  }
}