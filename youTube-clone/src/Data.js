export const API_KEY='AIzaSyCTY-s3bMVrqWhJTggkg5MZa0PjCjjJ4K8'

export const value_converter=(value)=>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+'M';
        } else if(value>=1000)
            {
                return Math.floor(value/1000)+'K';
            } else(value>=1000000)
                {
                    return value;
                }

}