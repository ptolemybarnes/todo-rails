require 'securerandom'
require 'pry'

class Todo
  attr_reader :description, :done, :uuid

  def initialize(description)
    @description = description
    @uuid = SecureRandom.uuid
    @done = false
  end

  def to_json
    {
      uuid: uuid,
      description: description,
      isDone: done
    }.to_json
  end

end
