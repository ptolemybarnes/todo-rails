class TodosController < ActionController::Base
  def index
    render json: {
      "12321": {
        description: 'feed cat',
        isDone: true,
        id: "12321"
      },
      "5325423": {
        description: 'bury treasure',
        isDone: false,
        id: "5325423"
      }
    }
  end
end
