var defaultState = 'normal';

var SceneIngame = function()
{ 
    this.SetState = function(state)
    {
        console.log('state change', this.state, '->', state);
        this.state = state;
        this.stateChangeTime = g_now; 
        this.lastMoveTime = new Date().getTime();
    }

    this.Start = function()
    { 
        this.SetState(defaultState); 
    }

    this.End = function()
    {
    } 

    this.Update = function()
    { 
     
    } 

    this.Render = function()
    {
    } 
};
