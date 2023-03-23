require 'securerandom'

class Todo
  attr_reader :description, :isDone, :uuid

  def initialize(
    description:,
    uuid: SecureRandom.uuid,
    isDone: false
  )
    @description = description
    @uuid = uuid
    @isDone = isDone
  end


end
