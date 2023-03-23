require 'securerandom'

class Todo
  attr_reader :description, :isDone, :uuid

  def initialize(description)
    @description = description
    @uuid = SecureRandom.uuid
    @isDone = false
  end
end
