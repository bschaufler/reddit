import React from 'react';

const App = () => {
  const title = 'Taking Showers with your socks is so much better than not';
  const count = '20.7k'
  const caption = 'r/unpopularopinion'
  const post = 'I almost always shower with my socks on. It just feels more relaxing, I don’t really like the feeling of water below my feet. Having socks on, even light ones, feels like a nice towel to put around my feet when I’m showering. It’s just better this way. I’ve done this since I was like, 8, and I don’t ever plan on changing it. When I told my friends about it they all said it was really weird. I just think it is more comfortable, relaxing, and overall a better experience.\n\nEdit: jeez I really didn’t think that this was a big deal.\n\nEdit 2: To address some things:Yes, I actually do this, I personally like it, and it really isn’t problematic so I do it. My feet aren’t always super clean but I rub lotion on them occasionally.\n\nEdit 3: well I went to sleep, and now I have 953 notifications.'
  return (
    <div className="page">
      <div className="spacer-headline"></div>
      <div className="caption">
        <div>{caption}</div>
      </div>
      <div className="spacer-headline"></div>
      <div className="headline-count">
        <div>{count}</div>
      </div>
      <div className="headline">
        <div>{title}</div>
      </div>
      <div className="spacer"></div>
      <div className="post-container">
        <div className="post-content">
          <div> 
            {post}
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;