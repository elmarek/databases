var MessageView = {

  //change username to a clickable link

  render: _.template(`
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
    `)

};

/*        <!--
<div class="roomname">
<%= roomname %>
</div>
-->
*/