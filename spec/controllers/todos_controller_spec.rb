require 'rails_helper'
require 'json'

describe TodosController, type: :request do
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
    get '/todos'

    todos = JSON.parse(response.body)
    expect(response).to be_ok

    todos.keys.each do |id|
      expect(id.length).to be(36) # length of uuid
    end
  end

  it "creates a todo, which is persisted" do
    new_todo = { description: 'new todo' }
    post '/todos', params: new_todo.to_json, headers: { 'CONTENT_TYPE' => 'application/json' }

    get '/todos'

    todos = JSON.parse(response.body)
    created_todo = todos.values.find {|todo| new_todo[:description] == todo["description"] }

    expect(created_todo).to be_present
  end
end
