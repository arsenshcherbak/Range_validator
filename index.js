class RangeValidator{

  constructor(to, from){
    this._to = to
    this._from = from
  }

  get to(){
    return this._to
  }

  set to(number){
    this._to = number
  }

  get from(){
    return this._from
  }

  set from(number){
    this._from = number
  }

  get range(){
    return [this._to, this._from]
  }
  
  validate(num){
    if(this.to<= num && this.from >=num){
      return true;
    } 
  }
}
