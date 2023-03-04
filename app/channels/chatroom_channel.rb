class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    chatroom = Chatroom.find(params[:id])
    stream_for chatroom
    # stream_from "chatroom"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
