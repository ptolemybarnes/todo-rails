require 'rails_helper'
require 'json'

describe TodosController, type: :request do
  it "should be successful" do
    get '/todos'

    todos = JSON.parse(response.body)
    expect(response).to be_ok

    expect(todos).to eq({
      "12321" => {
        "description" => "feed cat",
        "id" => "12321",
        "isDone"=> true
      },
      "5325423" => {
        "description" => "bury treasure",
        "id" => "5325423",
        "isDone" => false
      }
    })
  end
end
