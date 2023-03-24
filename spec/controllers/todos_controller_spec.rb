require 'rails_helper'
require 'json'

describe TodosController, type: :request do
  include Rails.application.routes.url_helpers

  it "fetches todos" do
    get '/todos'

    todos = JSON.parse(response.body)
    expect(response).to be_ok

    expect(todos.values).to match_array([
      a_hash_including("description" => 'bury treasure'),
      a_hash_including("description" => 'feed cat'),
    ])
  end

  it "todos are keyed by uuid" do
    get todos_path

    todos = JSON.parse(response.body)
    expect(response).to be_ok

    todos.keys.each do |id|
      expect(id.length).to be(36) # length of uuid
    end
  end

  it "creates a todo, which is persisted" do
    new_todo = Todo.new(
      description: 'new todo',
      uuid: SecureRandom.uuid,
      isDone: false
    )

    post '/todos', params: new_todo.to_json, headers: { 'CONTENT_TYPE' => Mime::EXTENSION_LOOKUP.fetch("json").to_s }

    get todos_path

    todos = JSON.parse(response.body)

    expect(todos).to have_key(new_todo.uuid)
  end

  it "responds 204 to the creation request" do
    new_todo = Todo.new(
      description: 'new todo',
      uuid: SecureRandom.uuid,
      isDone: false
    )

    post '/todos', params: new_todo.to_json, headers: { 'CONTENT_TYPE' => Mime::EXTENSION_LOOKUP.fetch("json").to_s }

    expect(response.status).to be(204)
  end
end
